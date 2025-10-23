# Security Policy

## Supported Versions

We actively support and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you have discovered a security vulnerability, please follow these steps:

### How to Report

1. **Do not** create a public GitHub issue for the vulnerability
2. Email us directly at [INSERT EMAIL] with the following information:
   - Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
   - Full paths of source file(s) related to the manifestation of the issue
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### What to Expect

- We will acknowledge your email within 48 hours
- We will provide a detailed response within 7 days
- We will keep you updated on the progress toward fixing the vulnerability
- We may ask for additional information or guidance

### Safe Harbor

We support safe harbor for security researchers who:
- Make a good faith effort to avoid privacy violations and data destruction
- Only interact with accounts you own or with explicit permission of the account holder
- Do not access or modify data that doesn't belong to you
- Wait for our response before disclosing any vulnerability information to third parties

## Security Best Practices

When using this application, please:

1. **Environment Variables**: Never commit sensitive information like API keys to version control
2. **Firebase Security**: Configure Firebase security rules appropriately for production
3. **Authentication**: Use strong passwords and enable two-factor authentication where possible
4. **Dependencies**: Regularly update dependencies to patch known vulnerabilities
5. **HTTPS**: Always use HTTPS in production environments

## Security Considerations

This application uses:
- Firebase Authentication for user management
- Firebase Firestore for data storage
- Material-UI components

Please ensure you:
- Configure Firebase security rules properly
- Validate all user inputs
- Implement proper error handling
- Use environment variables for sensitive configuration