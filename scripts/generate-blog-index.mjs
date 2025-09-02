import fs from 'fs/promises';
import path from 'path';

const blogDir = path.join(process.cwd(), 'frontend/public/blog');
const outputDir = path.join(process.cwd(), 'frontend/src/data');
const outputFile = path.join(outputDir, 'blogs.json');

const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;

function parseFrontmatter(content) {
  const match = content.match(frontmatterRegex);
  if (!match) {
    return {};
  }

  const frontmatter = match[1];
  const lines = frontmatter.split('\n');
  const data = {};

  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
      data[key.trim()] = value;
    }
  });

  return data;
}

async function generateBlogIndex() {
  try {
    const files = await fs.readdir(blogDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    const posts = await Promise.all(mdFiles.map(async (file) => {
      const filePath = path.join(blogDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const frontmatter = parseFrontmatter(content);
      
      const slug = path.basename(file, '.md');

      return {
        id: slug,
        slug,
        title: frontmatter.title || 'Untitled',
        excerpt: frontmatter.excerpt || '',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        category: frontmatter.category || 'Uncategorized',
        readTime: frontmatter.readTime || 'N/A',
        ...frontmatter
      };
    }));

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputFile, JSON.stringify(posts, null, 2));

    console.log(`Successfully generated blog index with ${posts.length} posts.`);
  } catch (error) {
    console.error('Error generating blog index:', error);
  }
}

generateBlogIndex();
