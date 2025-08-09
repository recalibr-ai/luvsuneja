import { useState, useEffect } from 'react';
import { createLoadingState, setLoading, setSuccess, setError } from '../services/api';

// Generic hook for API calls with loading states
export const useAPI = (apiCall, dependencies = []) => {
  const [state, setState] = useState(createLoadingState());

  useEffect(() => {
    const fetchData = async () => {
      setState(prev => setLoading(prev));
      
      try {
        const data = await apiCall();
        setState(prev => setSuccess(prev, data));
      } catch (error) {
        setState(prev => setError(prev, error));
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    setState(prev => setLoading(prev));
    
    try {
      const data = await apiCall();
      setState(prev => setSuccess(prev, data));
    } catch (error) {
      setState(prev => setError(prev, error));
    }
  };

  return {
    ...state,
    refetch
  };
};

// Hook for manual API calls (for forms, buttons, etc.)
export const useAsyncAPI = () => {
  const [state, setState] = useState(createLoadingState());

  const execute = async (apiCall) => {
    setState(prev => setLoading(prev));
    
    try {
      const data = await apiCall();
      setState(prev => setSuccess(prev, data));
      return data;
    } catch (error) {
      setState(prev => setError(prev, error));
      throw error;
    }
  };

  const reset = () => {
    setState(createLoadingState());
  };

  return {
    ...state,
    execute,
    reset
  };
};

// Specific hooks for different data types
export const useBlogPosts = () => {
  const { blogAPI } = require('../services/api');
  return useAPI(() => blogAPI.getAll());
};

export const useBlogPost = (id) => {
  const { blogAPI } = require('../services/api');
  return useAPI(() => blogAPI.getById(id), [id]);
};

export const useProjects = () => {
  const { projectAPI } = require('../services/api');
  return useAPI(() => projectAPI.getAll());
};

export const useServices = () => {
  const { serviceAPI } = require('../services/api');
  return useAPI(() => serviceAPI.getAll());
};

export const useProfile = () => {
  const { profileAPI } = require('../services/api');
  return useAPI(() => profileAPI.get());
};