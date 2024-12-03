import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

const mockCreateObjectURL = jest.fn((blob: Blob): string => 'mock-url');
const mockRevokeObjectURL = jest.fn((url: string): void => {});

// Override URL methods
Object.defineProperty(URL, 'createObjectURL', {
  value: mockCreateObjectURL
});

Object.defineProperty(URL, 'revokeObjectURL', {
  value: mockRevokeObjectURL
});

// Mock de la fonction de téléchargement
Object.defineProperty(window, 'location', {
  value: { assign: jest.fn() }
});

// Configuration des timeouts pour les tests
jest.setTimeout(10000);
