import Link from 'next/link';
import { ArrowIcon, DiscordIcon, RedditIcon, GithubIcon } from '@/app/Icons';
import './style.css';

export function AGCodeview() {
  return <div className='code-view'>
    <div className='code-view-content'>
      <div className='code-view-content-text'>
        <h3 className='code-view-header'>What is Apache AGE?</h3>
        <p className='code-view-paragraph'>
          Apache AGE® is a PostgreSQL extension that provides graph database functionality. The goal of Apache AGE® is to provide graph data processing and analytics capability to all relational databases.
        </p>
        <button className='code-view-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full' style={{ padding: "0.95rem 1.6rem 0.95rem 1.6rem" }}>
          View Full Document
        </button>
        <div className='code-view-footer'>
          <div className='code-view-footer-item'>
            <span className='code-view-footer-item-icon'>
              <DiscordIcon />
            </span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='code-view-footer-item-text'>Connect with developers on Discord</span>
              <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='code-view-footer-item'>
            <span className='code-view-footer-item-icon'>
              <RedditIcon />
            </span>
            <Link href='https://www.reddit.com/r/apacheage/' style={{ display: 'flex' }}>
              <span className='code-view-footer-item-text'>Ask and answer on Reddit forum</span>
              <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='code-view-footer-item'>
            <span className='code-view-footer-item-icon'>
              <GithubIcon />
            </span>
            <Link href='https://github.com/apache/age' style={{ display: 'flex' }}>
              <span className='code-view-footer-item-text'>Download and contribute on Github</span>
              <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <CodeArea />
  </div>;
}

function CodeArea() {
  return <div className='code-view-area'>
    <div className='code-view-area-line-numbers'>
      <div className='line-numbers'>
        <span className='line-number'>1</span>
        <span className='line-number'>2</span>
        <span className='line-number'>3</span>
        <span className='line-number'>4</span>
        <span className='line-number'>5</span>
        <span className='line-number'>6</span>
        <span className='line-number'> </span>
        <span className='line-number'> </span>
        <span className='line-number'>7</span>
        <span className='line-number'> </span>
        <span className='line-number'> </span>
        <span className='line-number'>8</span>
      </div>
    </div>
    <div className='code-view-area-content'>
      <div className='code comment'>
        # To create an edge and set properties.
      </div>
      <div className='code'>
        SELECT <span className='code-hl-sql'>*</span>  <br />
        FROM cypher(<span className='code-hl'>&#39;graph_name&#39;</span>, $$ <br />
        MATCH (a:label), (b:label) <br />
        WHERE a.property = <span className='code-hl'>&#39;Node A&#39;</span> AND b.property = <br /> <span className='code-hl'>&#39;Node B&#39;</span> <br />
        {`CREATE (a)-[e:RELTYPE {property:a.property +`} <br />
        <span className='code-hl'>{`'<->'`}</span> {`+ b.property}]->(b) RETURN e`} <br />
        $$) as (e agtype)<span className='code-hl-sql'>;</span>
      </div>
    </div>
  </div>;
}
