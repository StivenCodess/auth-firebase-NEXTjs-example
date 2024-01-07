[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)


# 🚀 Next.js 13 Firebase Server Example

This project serves as a guide to integrate Firebase with Next.js 13 in a server environment, providing a starting point for the development of modern web applications. The combination of Next.js and Firebase offers a powerful and scalable solution for authentication, real-time database, and other cloud functionalities.

## 🎯 Objective

The main purpose of this project is to provide developers with a robust framework to build efficient web applications, leveraging the ease of development of Next.js and the versatility of Firebase. Some key aspects include:

- **Firebase Integration**: Quick and straightforward setup of Firebase in the Next.js 13 server environment.
- **User Authentication**: Secure management of user authentication using Firebase Authentication, in this case, via email and password.
- **Real-time Database**: Implementation of Firebase Realtime Database for efficient and real-time data management.
- **Next.js 13 Server**: Utilization of the new features in Next.js version 13, including the server function.

## 🚀 Project Initialization

Follow these steps to initialize the project:

1. Clone this repository to your local machine:
```bash
  git clone https://github.com/your-username/nextjs-firebase-server-example.git
```
2. Navigate to the project directory:
```bash
  cd nextjs-firebase-server-example
```
3. Install the dependencies:
```bash
   npm install
```
4. Set up Firebase credentials: Create a credentials.json file in the root of the project with the service credentials provided by Firebase.
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYourPrivateKey\n-----END PRIVATE KEY-----\n",
  "client_email": "your-client-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-client-email"
}
```
5. Load environment variables by creating a .env.local file in the root of the project with the following content:
   
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_SECRET_KEY=../credentials.json
```
6. Start the application:
```bash
   npm run dev
```
**Note:** This project prioritizes functionality over aesthetics and error handling perfection. While the code is functional, it may not represent best practices for error handling or user interface design. Feel free to enhance the code as needed for your specific requirements.

**Additional Tips:**
- You can store user data, such as UID or email, wherever it suits your application requirements. It doesn't have to be limited to local storage.
- Consider improving error handling and refining the user interface based on your project's needs.

If you have any questions or run into issues, feel free to ask.

Now you can start developing your web application with Next.js and Firebase!
If you have any questions or run into issues, feel free to ask.
