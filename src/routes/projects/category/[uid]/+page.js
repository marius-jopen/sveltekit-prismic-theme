export async function load({ parent }) {
  const p = await parent()
  const { document, setup } = p  

  if (setup && document) {
    // Return the data which we got above
    return {
      document,
      setup
    };
  }
}
