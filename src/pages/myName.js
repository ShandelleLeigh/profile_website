import React, { Fragment }  from 'react';
import GSL from '../assets/GSL_139KB.jpg';
import ProfileImage from '../assets/ProfilePic.jpg';


const styles = {
  profileImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  imageContainer: {
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '300px',
    margin: '20px',
    border: '2px white solid',
    boxShadow: '0px .5px 5px .5px #383757',
  },
}

function myName (scrollHeight) {

  // const [scrollHeight, setScrollHeight] = useState(0);

  // useEffect(()=>{
  //   window.addEventListener('scroll', (event) => {
  //     var elmnt = document.getElementsByClassName('App')
  //     var x = elmnt[0].scrollLeft;
  //     var y = window.scrollY;
  //     setScrollHeight(y)
  //     // console.log('event: ', event, '\ny: ',y, '\nx: ',x, '\nelmnt: ', elmnt/*'\ntop: ',top,*/,
  //     //   '* \n window: ', window,
  //     //   '* \n window.scrollY: ', window.scrollY
  //     // )
  //   })
  //   return function cleanup() {
  //     /* TODO: remove event listener here */
  //   }
  // })

  console.log('scrollHeight: ', scrollHeight, '\n type of', typeof scrollHeight)

  return (
    <div>
      <img
        className='backgroundImg'
        src={GSL}
        alt={`Island's reflection on Great Salt Lake`}
      />
      <div className='myName'>
        <div className='textContainer'>
          <h1>Hello, my name is Shandelle Lovato</h1>
          <p>
            I'm a Front-End Web Developer,
            currently based out of
            Salt Lake City, Utah.
          </p>
        </div>
      </div>

      <div className='colorContainer'
        style={{marginLeft: `${scrollHeight * -2}px`}}
        >
        {/* <p>{scrollHeight} px</p> */}

      </div>
      <div className='profilePicture'>
        <img
          style={styles.profileImage}
          src={ProfileImage}
          alt={'Shandelle'}
        />
      </div>
    </div>
  )
}

export default myName;