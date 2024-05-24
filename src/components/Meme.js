import memesData from "./../memesData";

export default function Meme() {
  let url;
  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    url = memesData.data.memes[randomIndex].url;
    console.log(url);
  }
  getRandomMeme();

  return (
    <main>
      <form className="form">
        <div>
          <label>
            Top Text
            <input
              type="text"
              className="form__input"
              name="topText"
              placeholder="Shup up"
            />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              className="form__input"
              name="bottomText"
              placeholder="And take my money"
            />
          </label>
        </div>
        <button type="submit">Generate Meme</button>
        <img src="" alt="meme" />
      </form>
    </main>
  );
}
