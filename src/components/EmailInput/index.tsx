const EmailInput = () => {
  /**
   * Ideally, we'd have email validation living in here to free up
   * room for our actual page component + add needed reusability in the event
   * we have a separate area where we need email validation. 
   * 
   * Maybe a modal somewhere in the app when users require authentication
   */

  return (
    <input
      className="w-full rounded-lg bg-black px-4 py-3 text-sm text-white"
      id="email-input"
      name="email"
      type="text"
      placeholder="Email Address"
      autoComplete="off"
    />
  );
};

export default EmailInput;
