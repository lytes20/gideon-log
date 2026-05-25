import { Link } from 'react-router';
import Header from '../components/Header';

const APPS = [{ name: 'Markdown App', link: 'https://markdown.gidemvb.dev/' }];
function Apps() {
  return (
    <div>
      <Header />
      <div className="blog-list-container">
        <h1>Here is a list of personal apps I have built - Enjoy</h1>
        <ul>
          {APPS.map(({ name, link }) => {
            return (
              <li>
                <Link className="cursor-ne-resize" to={link} target="_blank">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Apps;
