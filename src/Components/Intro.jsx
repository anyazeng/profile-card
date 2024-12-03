export default function Intro() {
  return (
    <div className="intro">
      <div className="static-txt">
        <h1>Hi, I'm Anya, a</h1>
      </div>
      <ul className="dynamic-txts">
        <li>
          <span>Web Developer</span>
        </li>
        <li>
          <span>Dreamer</span>
        </li>
        <li>
          <span>Problem-Solver</span>
        </li>
        <li>
          <span>Marketer</span>
        </li>
      </ul>
      <section className="profile__description">
        <p>{`Not just your ordinary full-stack web developer.`}</p>
        <p>
          {`With 8 years of experience in marketing and a passion for technology, I'm eager to blend technical expertise with a creative mindset to deliver innovative digital solutions. `}
        </p>
        <p>
          {`
          When not coding, you'll
          find me whipping up dishes in the kitchen or capturing the beautiful moments through my lens on the streets.`}
        </p>

        <p>
          {`Tech, cooking, and photography are my passions,
          and I bring that same fervor to every project I tackle.`}
        </p>
      </section>
    </div>
  );
}
