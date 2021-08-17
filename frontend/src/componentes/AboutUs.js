import React from 'react'
import adocao1 from '../adocao1.jpg'



export class AboutUs extends React.Component{
    render(){
        return(

            <div className="wrapper row2">
            <div id="container" className="clear">
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
              <div id="about-us" className="clear">
                {/* ####################################################################################################### */}
                <div id="about-intro" className="one_third first">
                  <h2>Vivamuslibero Auguer</h2>
                  <div className="panorama"><img className="imgholder" src={adocao1} alt="" /></div>
                  <p>"Vivamus accumsan / Company Director"</p>
                  <blockquote>
                    <p><span>“</span> In odio. Mauris feugiat. Nunc posuere, felis sit amet faucibus convallis, tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Vivamus accumsan donec molestie pede vel urna curabitur eget sem ornare felis.</p>
                  </blockquote>
                  <p>In sed neque id libero pretium luctus. Vivamus faucibus. Ut vitae elit. In hac habitasse platea dictumst. Proin et nisl ac orci tempus luctus. Aenean lacinia justo at nisi. Vestibulum sed eros sit amet nisl lobortis commodo. Suspendisse nulla. Vivamus ac lorem. Aliquam pulvinar purus at felis. Quisque convallis nulla id ipsum. Praesent vitae urna.</p>
                </div>
                {/* ####################################################################################################### */}
                <div id="skillset" className="one_third">
                  <h2>Vivamuslibero Auguer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Et harumd und.</p>
                  <h2>Vivamuslibero Auguer</h2>
                  <ul>
                    <li>Aliquam venenatis leo et orci.</li>
                    <li>Pellentesque eleifend vulputate massa.</li>
                    <li>Vivamus eleifend sollicitudin eros.</li>
                    <li>Maecenas vitae nunc.</li>
                    <li>Ut pretium odio eu nisi.</li>
                    <li>Nam condimentum mi id magna.</li>
                    <li>Pellentesque consectetuer, felis vel rhoncus.</li>
                    <li>Sed sollicitudin bibendum dui.</li>
                    <li>Nullam tempus erat id tortor.</li>
                  </ul>
                </div>
                {/* ####################################################################################################### */}
                <div id="team" className="one_third">
                  <h2>Vivamuslibero Auguer</h2>
                  <ul className="clear">
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="figure"><img src={adocao1} alt="" />
                        <div className="figcaption">
                          <p className="team_name">Name Goes Here</p>
                          <p className="team_title">Job Title Here</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* ####################################################################################################### */}
              </div>
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
              {/* ####################################################################################################### */}
            </div>
          </div>
        );
    }
}