import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export default function Header() {
  const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAABaCAMAAACouC0TAAAA81BMVEX///8ANnEAjnm6uroAMm8ALWwAKGoANHCcprr4+Pj4+vxvhKQAi3UAJWn7/f49VoN/lbIyT38mT4Kkt8sAPHje5OsXRXzO1+Kru87Nzc0AImjs8PRAYo5Zd57ByNXE0N2HnrnE5d+Sp7/CwsLj4+MAhG3X19ep1c7Au7zf8/DQ0NDo6Oh5sKbq9vQAHGXV6ORKqJgmloNquawAEmJdrZ6vubiZ0Md7v7OIuK9ziKgynYymtrOm0cmWxbtke56krcBMaZKGxrySt7FIaJNHn5CArKVnqZ25x9gABV+LrKbD1dMnVYc5ppZvqqCxxcJnoZZuopcRmN3KAAAQZklEQVR4nO1dDVvayBYOCYEFQ2pVUMGqiAjUIh8FsdFqtajXW9vu//81N1+EOTNnJhNIKvTm3Wd3NcwcAvN6vuaciaKkSJEiRYoUKVKkSJEiRYoUKVKkSJHi/x2FwlvfQYr1welp4+yt7yHFmuB8X6udao1zc2EJZrfb7fVaPnq9Xse+0I0sz57T6fR6dVtG3ZMRIqIWhuKinygFB4UzTdtXCg37v7VF5nfqN1ej14HabBo+mvaP6uC1P7y6adU7smJathhroLqzAxmjr626gDIfDkJwe3y3t4t9rMN/ouGIM2s35GPVyMF3zkfZjfjOM5Qlv8hkcWrzRDtXFJs0mvYxogtT6E369grbUBkY3uWB1b9vdYVyzW5vMkXFuFesYb3LmbmlZ8XQc3q+8v7bHsOYzYtcFHw+cW/0lp5VPQj5E9vdKQWDSxWHLtufI71zgD25JUkULlk0zf6p5v7QOJW3IJ36ZNDEiMKsebM54i24o1YmqlCMPX/wtY7O3cpmwpHP69WdTUoNbOYkZs6R8+iyodMvlDbFX9JuJR+Mzb536VKK9M4BnqUXJikU9l2OaK6b6//cOJeb25lYajhVZis+5LGwJyXGZtOoh8yWoou7UrnKCfBjNpmFF4JLl3z2SPg1/T10KZxpPlxTcT77bT/cInXrIxm9Ml/ur6gY0xEjK8IYsm6QNF3sda1WyIWNS7tkdLE5+mvo4tshx2Nxfy8Ev4cG1b2RvGLx1voSE1OPJsawWrSECHSxF5bkS2x0yeSORV/VX0KX84AcrqPr4HR+RRO5MJ1XaZUQgFlomyyRxRiMCxSJLrZFOgxmxkeXzGdRdPRX0KXwkaBGY3aRYJC2z3NhzPtBZLKoKuOpdicRFZRHmD5MpESjSyZbCQxHjHTRvwnM0V9Al7nT4mmS2fWP4DLuwvReF1hlVaUDo9YinHP4YgFJFF3yANiqb8zoFper6754zP+u158upw1ACy2gRQ1e185Yi3SziE5Q1QGUYl5G8ZMhX0bkTUG67FRI5HMXJZ3WPkEcQ2mXkPRNtiqiSybHN0cIXaqIfCgvn0eGvE3e5XyfJsX8NYpHWuMUzi3eL7bMRh+I6Q4XJYsja0hIAnTJbRepLYDt24oOlYz+zZ8J6ZJ9/06M99vOJB5d9G/czQaWLnvYe0G2ZLAhb6FdKDtEOLoOTpkXgQvTHS24zGCJlW5/CbbYwgg/CNCltM1+3vJxFa7shb+wkC7VQ3YqAh5dMvoxbwpLFxQ7JKvzPxbajYkfZ7T+cLaL5iiwLxP7AuFsMeaA1++JN+lZfDH4dGpMf+6+hNJFUU7gCld9nQ59l2Xpks3wdnQWosvWSuwPnSNs0EAExOoex1p5hOmKnVyjaQxeR6PRlf3vyLLADlCTUAgdrvdjT7D6o6fJ1XDUtwSMIZI4EnShiJHzk/bxapeM/oNjjhahS3YV6FKgnRYPcAw6xN0XMAW6xTCa6rDV63XNbtctZnDKEFqTV6PpcaY5z8dySWc0B5dOzYLplkN0ekMBYQJpMnSpAWLoG97VmOmS1+/wKWuqXQofUSZolDOLU8qpheGzxVBHl5wyhd7lU99hTGA+upwA2lCH9J6Qec/TQ81AvcjQRbkl11j/4KmBmOliBzN4dLSedKGD54AHVHLlHB+mte/5JmQoqkhRuvWJOgjoMsHFNPuYDF5yZh5MS9Flj0x0ZP2cWgx0gdGvfoBOWUe6oE6Li4/USI7F0h74miW8/snszL6mG3T9jQGyR+CgyPGKBzNNJEWXMsmMgC7Lu7oHO4AvpRNsyvr5LuccO+SASfWjzq42tjhssfA6FA56HCFcxvVw/WLM6CVHlwyxFrMUydLaJZ/dhqYpX8EWed20C5JpmaPBDseGtfsctgz5VU8ITDThQgbGDDjqaOK/LEcXcpB+611cni76XjEDcoD6d2TKetHFZDNvJE7ZGYgqaj9wfAiODeHhEmWLoNDOBhpIGX3/e5eiyy6ZqdO/eBfjoIuyBz3fCyQ6Wiu68J0WT7kgu4iIszue4srlJtrNdDDLQu0ZMmg10beOQhfg6uZ8D2N538WmS5EyR1tsdLRGdKlx/NYAWBmUyU56xHVLJLfFBhaKG4MQTxmPvJt+UkyKLt/JNb3wVzQW7aLU4B6n/oHhw/q4ukjGnwJa08KaL9TPbd5jkwXooFLCOGei25FNXyXJ0KWYJZei6l+Nhy7K3gUpBrmFNdEuIU6Li310Jr1x1P6Eug/cYm0esJRL4LPygTq7UejyhVQusz2AuOhifoHmaIde6PWgC1OmIK1c2Fga9VwGkWIiBfdcBCF0gBaqlPzEiwRdDsnwZZ57jYkuSpkyR7fU3tE60IWX8YdocG6eiqUfsPVSH7nVmRxgWsKQcJbrKF18moXT5QgUvOibs88ci6vr4LkEVpq+idX3XWTskAMkivYANdMTZg2mWrBT7aNTF8D+mjCXdSBh0OoDjC6Sxqh2UiFHZHc4tbq5kyMBgkmIdlGUDSApn4e1KiuvXUKC57ly4bYTgVh6jCqXF1cC2S8wQsd5eO0qPSQgxttJKKDaxZAJpIu1k/dAt+R1bifAjghBHRtKl/I7aI42gDlacbpIOS0u6O2iOUyCcHiKbjqjXGCRTEERrzEx8b1FGf8HpQs/77J997xbq5XLu893t3oJBEV5styV7gTIc5HVxXRRDmF0pAPWrjRd5JwWD4ICP8KatdFsyWM7IJ2vo7p4Os0bfoNWy8gFV5ira1hcujz/J7Pl1NZWMiWq2EAHTekROgGyKF0yAV2UD1R0RH6zK0yXgqTT4ikGkSRiHOY6qKQgz4VBE/wz1JUeJkZqDwF1kUd8Y3SgO2X0eboFIF/9AFKuEfqMcLrMtYtSe8dP1q2uqyvrtHjgOroOAovWfsCWfwokuRaJU8jiwuoqdexlqbTwV1G6BqHLM6I28tnSzh2McOOki7IHheWJov1V1S5YWbZIuQj75oNYuv0JW/8XWti5MhW4LiNFQaqrAosiBFpPHgTgCF2KtzRfsrmdb0wtSqx0Ub7ANhQiWbeadDFFZQoYQrrmA/XyG4t/rxlx/+UUxLiLe4+WLlDNRxx0UZEzvYRFRkdUXv7ix/ER66fFSxcqWZf7EryyinSJ5LT4CmFfiIY/bIxpjemYlobbLB/Nuh03ISwK3wCwUccC8OkspEID6QNSveywB0e5iNPVtfEMS1/mMdgK+i7RnJZIuMa0xu82PaxxJTr9qYDGTVJZF3wbOyAaSpcjUFDL+eYp7aILTvkqhWsXxhy9m5F05bQLr7w2HrogEY3xk6GLJuoqeTVxHSETGOHb2MFMlC7Ae2E2cXxAuui3xwIEiyegC1XKkPOL9laNLsLayhjoIs66zMCr5XWH3ytKCxETWrvgAIuLQvuMjkC1Jd6KHtcWY4BnsOKZnK+SVosuvIaQROnywAz7JbJFLTQwInQEHx2sFYBwejibAN8I9ZKtoGsU2xZjAMocHXhLvkp0WdhpEfu5HpxxbcwnMX7R4tr3TX5vs9Plgda6SPgueDZn3sDGocsuyQX8bMrYtYtiVqA58tolV8fVNSNk/CGc7SLT+wf+zxfs/t7g0oWNox8+eXhCRjthDEqX8HK8Dl4LPv/SOXQB3gv+txo/XZRn6D1X3aNkVkW7LOO0SB22fMqlyxXr6rY9PLCesWs6ULqMwu6A02gicWAHuUi224msUgJ0UY6Bgcu+KysrQ5dlnJZ9qbrJApcun1i6eGggReCuzUGNSkgPAO7xqIZFjOAWMJC7fvkScvRtEnSpQXOkO1ZwJehSW4Is3KJLGmdh5QssXZBSKrdOEu+wDvF18Z4R0IDApUsZ9EW/Y4Pp+F1dxQnJQHTkmKMV8F2WDJ55RZc0nCopLDJSLdZ58YDF04YjCgukwwoY0DI60dl0oDyKrHHL6/8w0pPQLoq5SZmj2ttrFzO8IUQM4V40iX08TcduMc7wC1neV0cSlqYL6VSq4/VWA3CuB58uwHvJsu3LidCFKWU4fnO6LJ/xl36qyDlnE8CwcMFtJKnmxT9FzskLfO+Fw5YmjL4FxZcgDRIkWQMkQxflCBbu5o7eli4xZPz5RZcMGpzCbo6zi1XeeRrExE/e4Lfkc44CEh7DDOlSBhvTOt2OmojvojAnah4cvSFdYsn4R2j4OOXUu6jqT0zyPma5frnKjFM9xemnb3HOdWH6kkSl3aBCnznKNCHtotQOgDnKHrydqxtLxh9vXcRRaHDPAUK2GduI66JOx+4DKdBqOocAfdZ/6Q25p4zRg0V02QVLQC9uUnRRdj/DUgby5z+pXWIqU4jUTXamNbgHAb2MAWPa2jWmidxih9NCl1dtZzT75PP3ur0bi/9kCaaLTdg4AuxNviQqvoyRLlSyDlDnz9ElSo2/ENHeFU/UueusTn9ez7K5DleeUGJ5Xk7jnHu2nWoY1uRry2lea11ejVT+gZfIroGQLmV4QuoxeDE5utQOeHz5Y3SJr0wh4vN/97Ux99Rk57rVd47R7fPrF2YpmgZ3hBocwSs+fxke/e1B3MUIgqNsBXYCJOTqKtQG5yJ0WdZ3ia9MQVzRzcKOpTnOLrHUokWevTHPZ5aG09vGQEyXMlgEooBWSVK72LI5zxT5M9pFvjExHBGiaBe2s4uW68rCCvybpcTw9q9DeqSPofdCqhc64P0QArfaSZIute+4fvkTdIm3XC7isQluLH29xCI/BXRZRoxt9/CzGkLoUq4AHX9AeLv0A2p0MS6YB9QI6KLswkLvP0iXZTP+EMLWRRS2elnCjpClMe2XxcUMsMe8KuEnMABS5Mnu5eUffyWgC8ccJU6XuGsrIysX7yRM9PwoGcCOJPyMu3CyGBPuY8fDDuwAf+bk1tHSD9cTaReliJqjhF3d2Gv8ozq67k04834uyBcLdiQ9LvL4xabgqOfQ44CO4TEu8zrMZOmiHO4g5ihR7RJbpmWOiFG0B5ezVwuxxfgN37/9EvkRjIYlKukNf/zVe7hFHHi7CdNFOamyQpKkSxI1/gsoF//0jgUW2gHTYnIdLT4yjHvh6XXhh43R/URF9Hr8dCn+YM1RcnRJpDExynbRHH6v/vhpgad2si0m2hVaQYNyRbUmIUcdhtOlCM+PCs54SdbVVaiCm2h0ieq7iB76sAQWcHQd+JF8+2Ea8cGdxgC5ifb4UUZRGU111Ao9F1Pm4XqwAmXHX7GktYv9xkx0lIx2SaoxMXoU7d9PIOF6JKcaXDoMBhaybe1g/Mg5NX423VAH/VZXoka0kiNzIyhdyltVsuH58+zhetWQTAuedyFmlcKe1PsjRwnJbXE/UjYHxsnTxUysMVG66JLGXNfZquG3+5hFZIln2wGD6e9//318ub52dh45aF/jchwJTbX/tSV5au/mBoFbpODfxuE/AHdes/ve7UYU3Ho9rHfkNfzt5igzUtAGORdf4DjpJ73GmfGHWCSK9u+JXGhtfP3yZNFaZmBZ0+lPhyTX47EmIAqQ83M6CKjmiXkdXva68ic8FwGinCNuFqPBZN8v4t0Jp8iOo1FIDtL3IHVTHQKLS1bMbr3eal1etur1TpTlTpEiRYoUKVKkSJEiRYoUKVKkSJEiRYoUKdYE/wNOoSaoj81aWwAAAABJRU5ErkJggg=="
                height="40"
                alt="logo"
                loading="lazy"
              />

            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Home</Link>

              </li>
              <li className="nav-item">
                <Link to={"/view-bookings"} className="nav-link">Bookings</Link>

              </li>
              <li className="nav-item">
                <Link to={"/staff"} className="nav-link">Drivers</Link>

              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Services</Link>

              </li>
              <li className="nav-item">
                <Link to={"/about-us"} className="nav-link">About Us</Link>

              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link">Contact Us</Link>

              </li>
            </ul>

          </div>

          <a href="/login">
            <button type="button" className="btn btn-warning me-3">
              Login
            </button>

          </a>
          <a href="/sign-up">

            <button type="button" className="btn btn-warning me-3">
              Sign up
            </button>

          </a>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>

          <div className="d-flex align-items-center">

            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="/user-profile">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>

    </>

  );
}