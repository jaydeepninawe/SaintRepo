import React from "react";
import { FaDiscord, FaGithub, FaCode } from "react-icons/fa"; // Import Font Awesome icons
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <>
      <section className="main-content">
        <div className="intro-text">
          <h1 className="title">
            <span className="gradient">Club of Programmers</span>,
            <span className="selection">
              Technocrats Institute of Technology​​
            </span>
          </h1>
          <span className="subtitle selection">
            Club of Programmers, Technocrats Institute of Technology is a
            programming club that aims to create a place to learn and enjoy
            programming together. Our sole purpose is to increase the
            interaction and collaboration between students studying or
            interested in programming.
          </span>

          
        </div>
      </section>

      <div className="two_container">
        <div class="info-container-right">
          <h3 class="what-we-provide gradient title ">our clubs</h3>
          <div class="wwp-container">
            <div class="benefit-box">
              <ion-icon name="trophy-outline"></ion-icon>
              <p class="benifit-name">club 1</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="school-outline"></ion-icon>
              <p class="benifit-name">club 2</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="reader-outline"></ion-icon>
              <p class="benifit-name">club 3</p>
            </div>
          </div>
          <div class="wwp-container">
            <div class="benefit-box">
              <ion-icon name="trophy-outline"></ion-icon>
              <p class="benifit-name">club 1</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="school-outline"></ion-icon>
              <p class="benifit-name">club 2</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="reader-outline"></ion-icon>
              <p class="benifit-name">club 3</p>
            </div>
          </div>
        </div>


        <div class="info-container-right">
          <h3 class="what-we-provide gradient title"> club members</h3>
          <div class="wwp-container">
            <div class="benefit-box">
              <ion-icon name="trophy-outline"></ion-icon>
              <p class="benifit-name">club 1</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="school-outline"></ion-icon>
              <p class="benifit-name">club 2</p>
            </div>
            <div class="benefit-box">
              <ion-icon name="reader-outline"></ion-icon>
              <p class="benifit-name">club 3</p>
            </div>
          </div>
        </div>


        <div className="three_container">
          <div className="upcomming-events">
            <h1 className="title-sytle-theme">Upcoming Events</h1>
            <ul className="eventlist"></ul>
            <p className="ney">NO CURRENT EVENTS !</p>
          </div>

          <div class="past_events">
            <h1 classnam="title-sytle-theme">Past Events</h1>
            <ul class="eventlist">
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Teacher's day</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>

              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">
                     Movie Trivia
                    </h3>
                    <p class="event-desc">Event on : 10th Nov, 2022</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 200</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>

              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Code-Hunt-2k23</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>

              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Tree plantation</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>

              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">aptiCracker</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">concept-2K23</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">IPL</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">champions era</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Grandmaster-clash</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Blind-coding </h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
              <li class="past-event">
                <div class="p-event-a">
                  <div class="p-event-left">
                    <h3 class="event-title">Treasure hunt</h3>
                    <p class="event-desc">Event on : 11th April - 13th April</p>
                  </div>
                  <div class="p-event-right">
                    <p class="past-event-desktop-view">participation: 100</p>
                    <p class="past-event-desktop-view">Duration: 3 Days</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
<div className='gallery'>
    <div className='name'> 
      <h1>Event-gallery</h1>
    </div>
    <div className='about_container'>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
    
    </div>

    <div className='about_container'>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
    
    </div>
    <div className='about_container'>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      <div className='box1'>
          <div className="photo">
              <img src="https://c4.wallpaperflare.com/wallpaper/488/999/699/moon-art-vector-background-illustration-hd-wallpaper-preview.jpg" alt="image" />
          </div>
          <div className="text">
            <h1>Event-name</h1>
            
          </div>

      </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Home;
