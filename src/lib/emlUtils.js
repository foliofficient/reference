export const sendEML = async (email) =>
  fetch('/api/send_eml', {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  });
