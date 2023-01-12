export default function Button({ theme, setTheme }) {
  function changeTheme() {
    setTheme(theme == "Light" ? "Dark" : "Light");
  }

  return (
    <>
      <button className={theme} onClick={changeTheme}>
        <span className="emoji">{theme == "Light" ? "🌙" : "🌞"}</span>
      </button>
    </>
  );
}
