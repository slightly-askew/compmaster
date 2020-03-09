import * as admin from 'firebase-admin'

export const verifyIdToken = token => {
  const firebasePrivateKey = process.env.FIREBASE_SERVER_PRIVATE_KEY

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_SERVER_PROJECT_ID,
        clientEmail: process.env.FIREBASE_SERVER_CLIENT_EMAIL,
        // https://stackoverflow.com/a/41044630/1332513
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error
    })
}
