// OpenSIN API - Standalone API Package
// Part of OpenSIN AI Agent Framework
// See: https://github.com/OpenSIN-AI/opensin_api

/**
 * Main API entry point for OpenSIN.
 * This package provides the API interface for the OpenSIN agent framework.
 *
 * @package @opensin/api
 * @license MIT
 */

export const API_VERSION = '1.0.0';
export const FRAMEWORK_NAME = 'OpenSIN';

/**
 * OpenSIN API client interface
 */
export interface OpenSINAPIClient {
  version: string;
  framework: string;
}

/**
 * Create a new OpenSIN API client
 */
export function createClient(): OpenSINAPIClient {
  return {
    version: API_VERSION,
    framework: FRAMEWORK_NAME,
  };
}

export default { createClient, API_VERSION, FRAMEWORK_NAME };