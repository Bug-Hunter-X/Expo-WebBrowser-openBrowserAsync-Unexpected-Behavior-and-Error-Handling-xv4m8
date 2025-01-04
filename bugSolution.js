import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log({ result });
  } catch (error) {
    console.error('Error opening browser:', error);
    // Implement more robust error handling here, like showing an alert to the user
    Alert.alert('Error', 'Could not open the link. Please check your browser settings.');
  }
}

// Add a check to see if WebBrowser is available before using it.
if (WebBrowser.openBrowserAsync) {
  handlePress();
} else {
  console.warn('WebBrowser is not available on this platform.');
}
This improved version includes a `try...catch` block to handle potential errors and provides a more user-friendly experience.  Additionally, it checks WebBrowser availability before usage to improve reliability across different platforms.