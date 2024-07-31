import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoPython,
  IoLogoDocker,
  IoLogoFirebase,
} from 'react-icons/io5';
import { SiMongodb, SiSqlite } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import '../styles/components/tech-list.css';

const TechList = () => {
  return (
    <ul className='tech-list'>
      <li>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoJavascript />
          <span>JavaScript</span>
        </a>
      </li>
      <li>
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoReact />
          <span>React</span>
        </a>
      </li>
      <li>
        <a
          href='https://reactnative.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoReact />
          <span>React Native</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.python.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoPython />
          <span>Python</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.docker.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoDocker />
          <span>Docker</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.mongodb.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiMongodb />
          <span>Mongo</span>
        </a>
      </li>
      <li>
        <a
          href='https://firebase.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoFirebase />
          <span>Firebase</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.postgresql.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BiLogoPostgresql />
          <span>PostgreSQL</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.sqlite.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiSqlite />
          <span>SQLite</span>
        </a>
      </li>
    </ul>
  );
};

export default TechList;
