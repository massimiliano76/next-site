import {Component} from 'react'
import Page from '../components/page'
import Icons from '../components/icons'
import RoundButton from '../components/round-button'

const Description = ({title, stress, children}) => (
  <aside className={`${stress ? 'stress': ''}`}>
    <h2>{title}</h2>
    <div className='desc'>
      <p>{children}</p>
    </div>
    <div className='footer'>
      READ MORE
    </div>
    <style jsx>{`
      aside {
        max-width: 273px;
        margin-bottom: 24px;
        padding: 32px 35px;
        border: 1px solid #EAEAEA;
        border-radius: 5px;
        margin-right: 0px;
      };
      aside.stress {
        border: 1px solid #000000;
      };
      h2 {
        padding: 0px;
        margin: 0px 0 0 0px;
        font-weight: 400;
        font-size: 20px
      };
      span {
        width: 40px;
        height: 40px;
        float: left;
      };
      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #999999;
        margin-top: 18px;
      };
      .desc {
        margin-top: 28px;
        min-height: 120px;
      };
      .footer {
        font-size: 12px;
        font-weight: 200;
        margin-top: 28px;
      };
      @media (min-width: 1000px) {
        aside {
          margin-right: 20px;
        };
      }
    `}</style>
  </aside>
)

export default class Enterprise extends Component {
  render() {
    return (
      <Page>
        <section>
          <div className='hero flex-column'>
            <h1 className='title'>
              Enterprise Support
            </h1>
            <div className='slogan'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </div>
          </div>
          <div className='descriptions flex-column'>
            <Description title='Priority Support'>
              Emails to our support queue are given priority and are guaranteed to be handled within 24 hours.
            </Description>
            <Description title='Advanced Priority Support'>
              Emails to our support queue are given priority and are guaranteed to be handled within 12 hours.
            </Description>
            <Description title='Static Websites' stress>
              Your team will have direct access to core engineers in our corporate Slack with a dedicated channel to maintain and archive your support requests and their respective bug fixes.
            </Description>
          </div>
          <div className='footer flex-column'>
            <p>For more information<br className='brk' /> about <span className='bold'>Next.js Enterprise Support</span></p>
            <RoundButton color='black' href='/contact'>Contact us</RoundButton>
          </div>
        </section>
        <style jsx>{`
          section {
            margin: 16px auto 63px auto;
          };
          .flex-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            font-size: 44px;
            font-weight: 200;
            text-align: center;
          };
          .slogan {
            font-size: 14px;
            font-weight: 200;
            text-align: center;
            color: #666666;
            max-width: 284px;
          };
          .descriptions {
            margin: 50px auto 0 auto;
          };
          .footer {
            margin: 27px auto 0 auto;
            color: #666666;
            font-size: 18px;
          };
          .footer p {
            margin: 0 0 29px 0;
            text-align: center;
            line-height: 30px
          };
          .bold {
            color: #000000;
          };
          .brk {
            display: inline-block;
          };
          @media (min-width: 1000px) {
            section {
              display: flex;
              flex-direction: column;
              margin: 154px auto 126px auto;
            };
            .slogan {
              max-width: 749px;
            };
            .descriptions {
              flex-direction: row;
              margin: 98px auto 0 auto;
            };
            .footer {
              margin: 84px auto 0 auto;
            };
            .brk {
              display: none;
            };
          }
        `}</style>
      </Page>
    )
  }
}
