import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '../common/container/Container'
import './help.scss'

class Help extends Component {
  componentWillUnmount() {
    this.props.keyboardShortcut(false)
  }

  render() {
    return (
      <section className='help'>
        <h2 className='visually-hidden'>Help</h2>

        <Container title='tracking'>
          <span>To get started you need to enter the URL to your cctray xml file. Where it lives depends on your CI Server of choice:</span>
          <table className='help-tracking-table'>
            <thead>
            <tr>
              <th>CI Server</th>
              <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Jenkins</td>
              <td className='url'>http://jenkins.&lt;servername&gt;:8080/cc.xml</td>
            </tr>
            <tr>
              <td>Hudson</td>
              <td className='url'>http://hudson.&lt;servername&gt;:8080/cc.xml</td>
            </tr>
            <tr>
              <td>Travis CI</td>
              <td className='url'>http://travis-ci.org/&lt;ownername&gt;/&lt;repositoryname&gt;/cc.xml</td>
            </tr>
            <tr>
              <td>GO</td>
              <td className='url'>http://&lt;servername&gt;:8154/go/cctray.xml</td>
            </tr>
            <tr>
              <td>Snap CI</td>
              <td className='url'>https://snap-ci.com/&lt;ownername&gt;/&lt;reponame&gt;/branch/master/cctray.xml
              </td>
            </tr>
            <tr>
              <td>CircleCI</td>
              <td className='url'>https://circleci.com/cc.xml?circle-token=&lt;circle-token&gt;</td>
            </tr>
            <tr>
              <td>TeamCity</td>
              <td className='url'>http://teamcity:8111/guestAuth/app/rest/cctray/projects.xml</td>
            </tr>
            <tr>
              <td>CruiseControl.rb</td>
              <td className='url'>http://cc.rb.&lt;servername&gt;:3333/XmlStatusReport.aspx</td>
            </tr>
            <tr>
              <td>CruiseControl</td>
              <td className='url'>http://cc.java.&lt;servername&gt;:8080/cctray.xml</td>
            </tr>
            <tr>
              <td>CruiseControl.NET</td>
              <td className='url'>http://cc.net.&lt;servername&gt;/XmlStatusReport.aspx</td>
            </tr>
            <tr>
              <td>Solano CI</td>
              <td className='url'>http://api.tddium.com/cc/&lt;long_uuid_string&gt;/cctray.xml</td>
            </tr>
            </tbody>
          </table>
          <p>If you are just checking us out then you can use the Apache projects cctray at: <span className='example-tray'>https://builds.apache.org/cc.xml</span>
          </p>
        </Container>

        <Container title='success'>
          <span>
            You can add text or image URLs, these will get displayed when no projects are broken or building on the monitor page. Images are previewed
            in a 16:9 ratio which is how they would look on a full HD TV (1920x1080).
          </span>
          <p>Need some inspiration?</p>
          <p>
            Try searching for some <a href='https://duckduckgo.com/?q=nature+1920x1080&iax=1&ia=images' target='_blank' rel='noopener noreferrer'>nice images</a> or check
            out <a href='http://www.disapprovallook.com/' target='_blank' rel='noopener noreferrer'>ಠ_ಠ Disapproval Look</a> for some fun messages, like jelly guy! ༼つ◕_◕༽つ
          </p>
        </Container>

        <Container title='Backup'>
          <span>
            To export to GitHub you need to generate a <a href='https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/' target='_blank' rel='noopener noreferrer'>personal access token</a> to
            allow a non-anonymous gist to be created. Creating a non-anonymous gist will allow you to delete it via the website later.
          </span>
          <p>
            The token <em>only</em> requires the <code>gist</code> <a href='https://developer.github.com/v3/oauth/#scopes' target='_blank' rel='noopener noreferrer'>scope</a>.
          </p>
          <p>
            Access tokens are not stored locally as they would allow editing of any of a users gists, so they need to be manually entered every time you
            want to export.
          </p>
          <p>
            Importing does not require an access token as even <a href='https://help.github.com/articles/about-gists/#secret-gists' target='_blank' rel='noopener noreferrer'>secret gists are not actually private</a>.
          </p>
        </Container>

        <Container title='keyboard shortcuts' className='keyboard-shortcuts' highlight={this.props.showShortcuts}>
          <span>The following keyboard shortcuts can be used to:</span>
          <table className='help-shortcut-table'>
            <thead>
            <tr>
              <th>Shortcut Key</th>
              <th>Definition</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><kbd className='binding'>?</kbd></td>
              <td>Keyboard shortcuts</td>
              <td>Shows keyboard shortcuts (this section).</td>
            </tr>
            <tr>
              <td><kbd className='binding'>esc</kbd></td>
              <td>Blur action</td>
              <td>Blur the currently focused input, allowing other shortcuts to be used again.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>m</kbd> or <kbd className='binding'>1</kbd></td>
              <td>Go to Monitor</td>
              <td>Navigate to the monitor page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>t</kbd> or <kbd className='binding'>2</kbd></td>
              <td>Go to Tracking</td>
              <td>Navigate to the tracking page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>s</kbd> or <kbd className='binding'>3</kbd></td>
              <td>Go to Success</td>
              <td>Navigate to the success page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>v</kbd> or <kbd className='binding'>4</kbd></td>
              <td>Go to Settings</td>
              <td>Navigate to the settings page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>b</kbd> or <kbd className='binding'>5</kbd></td>
              <td>Go to Backup</td>
              <td>Navigate to the backup page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>h</kbd> or <kbd className='binding'>6</kbd></td>
              <td>Go to Help</td>
              <td>Navigate to this (the help) page.</td>
            </tr>
            <tr>
              <td><kbd className='binding'>+</kbd><kbd className='binding'>0..n</kbd> or <kbd
                className='binding'>&#61;</kbd><kbd className='binding'>0..n</kbd></td>
              <td>Include all</td>
              <td>Includes all projects for the tray with the given index (the first tray is at index 0).</td>
            </tr>
            <tr>
              <td><kbd className='binding'>-</kbd><kbd className='binding'>0..n</kbd></td>
              <td>Exclude all</td>
              <td>Excludes all projects for the tray with the given index (the first tray is at index 0).</td>
            </tr>
            <tr>
              <td><kbd className='binding'>r</kbd><kbd className='binding'>0..n</kbd></td>
              <td>Refresh tray</td>
              <td>Refresh the tray with the given index (the first tray is at index 0).</td>
            </tr>
            <tr>
              <td><kbd className='binding'>p</kbd><kbd className='binding'>0..n</kbd></td>
              <td>Toggle project view</td>
              <td>Toggle project and settings views for the tray with the given index (the first tray is at index
                0).
              </td>
            </tr>
            <tr>
              <td><kbd className='binding'>y</kbd><kbd className='binding'>m</kbd><kbd className='binding'>0..n</kbd>
              </td>
              <td>Delete success message</td>
              <td>Deletes the message at the given index (the first message is at index 0).</td>
            </tr>
            <tr>
              <td><kbd className='binding'>y</kbd><kbd className='binding'>i</kbd><kbd className='binding'>0..n</kbd>
              </td>
              <td>Delete success image</td>
              <td>Deletes the image at the given index (the first image is at index 0).</td>
            </tr>
            </tbody>
          </table>
        </Container>

        <Container title='additional links'>
          <ul className='help-links'>
            <li>
              <span className='help-link-icon icon-github4'/>
              The full Nevergreen source is available on <a href='https://github.com/build-canaries/nevergreen'
                                                            target='_blank' rel='noopener noreferrer'>Github</a>.
            </li>
            <li>
              <span className='help-link-icon  icon-twitter3'/>
              Follow Build Canaries on <a href='https://twitter.com/BuildCanaries' target='_blank' rel='noopener noreferrer'>Twitter</a> for
              news and updates.
            </li>
            <li>
              <span className='help-link-icon  icon-IcoMoon'/>
              Icons from <a href='https://icomoon.io/' target='_blank' rel='noopener noreferrer'>IcoMoon</a> &quot;custom built and crisp icon fonts,
              done right&quot;.
            </li>
          </ul>
        </Container>

        <Container title='licenses'>
          <span>
            &quot;Pacman Death Sound&quot; by <a href='http://www.orangefreesounds.com/pacman-death-sound/' target='_blank' rel='noopener noreferrer'>Alexander</a> is
            licensed under <a href='https://creativecommons.org/licenses/by-nc/4.0/legalcode' target='_blank' rel='noopener noreferrer'>CC BY 4.0</a>
          </span>
        </Container>
      </section>
    )
  }
}

Help.propTypes = {
  keyboardShortcut: PropTypes.func.isRequired,
  showShortcuts: PropTypes.bool
}

export default Help
