import { useCallback } from 'react';

/**
 * Hook for various verification functions.
 */
const useVerification = () => {
  /**
   * Checks if an email is valid.
   * @param email The email to validate.
   * @returns Boolean indicating if the email is valid.
   */
  const isValidEmail = useCallback((email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }, []);

  /**
   * Checks if a URL is valid.
   * @param url The URL to validate.
   * @returns Boolean indicating if the URL is valid.
   */
  const isValidURL = useCallback((url: string) => {
    const trimmedURL = url.trim();
    if (trimmedURL.includes(' ')) {
      return false;
    }
    try {
      const parsedURL = new URL(url);
      return parsedURL.protocol === 'http:' || parsedURL.protocol === 'https:';
    } catch (error) {
      return false;
    }
  }, []);

  /**
   * Checks if a phone number format is valid.
   * @param number The phone number to validate.
   * @returns Boolean indicating if the phone number format is valid.
   */
  const checkPhoneNumberFormat = useCallback((number: string) => {
    if (number && number.trim().length < 5) {
      return false;
    }
    if (number.split(' ')[1] === '') {
      return false;
    }
    return true;
  }, []);

  /**
   * Checks if a phone number is in E164 format.
   * @param input The phone number to validate.
   * @returns Boolean indicating if the phone number is in E164 format.
   */
  const isE164PhoneNumber = useCallback((input: string) => {
    // /[^+\d]/g 会匹配除了 + 和数字以外的所有字符,
    const filterPhone = (value: string) => value.replace(/[^+\d]/g, '');

    return /^\+?[1-9]\d{4,14}$/.test(filterPhone(input));
  }, []);

  return {
    isValidEmail,
    isValidURL,
    checkPhoneNumberFormat,
    isE164PhoneNumber,
  };
};

export default useVerification;
