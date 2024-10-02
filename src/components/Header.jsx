import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import ReactAudioPlayer from 'react-audio-player';
import Logo from './Logo';
import Social from './Social'
import audioFile from '../assets/audio/audio.mp3';


export default function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);

  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const toggleAudio = () => {
    const audio = audioRef.current.audioEl.current;
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setAudioPlaying(!audioPlaying);
  }

  return (
    <>
      <header className={`heading ${scrolled ? 'position-fixed' : ''}`}>
        <Container>
          <div className='heading-wrap d-flex align-items-center justify-content-between'>
            <Logo />
            <div className="heading-actions d-flex align-items-center flex-wrap gap-2 gap-lg-4">
              <button className="sound-btn bg-transparent text-white" onClick={toggleAudio}>
                <span className="icon p-0 border-0 bg-white d-flex align-items-center justify-content-center">
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3350_8)">
                      <path d="M12.2599 6.48633C12.7365 6.84372 13.1232 7.30715 13.3896 7.83992C13.656 8.37268 13.7947 8.96015 13.7947 9.5558C13.7947 10.1515 13.656 10.7389 13.3896 11.2717C13.1232 11.8045 12.7365 12.2679 12.2599 12.6253" stroke="#010101" strokeWidth="1.15105" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.3319 4.18433C15.133 4.83172 15.7791 5.6501 16.223 6.57953C16.6669 7.50897 16.8973 8.52592 16.8973 9.55591C16.8973 10.5859 16.6669 11.6029 16.223 12.5323C15.7791 13.4617 15.133 14.2801 14.3319 14.9275" stroke="#010101" strokeWidth="1.15105" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.35365 11.8578H3.81891C3.61539 11.8578 3.42021 11.777 3.2763 11.633C3.13239 11.4891 3.05154 11.2939 3.05154 11.0904V8.02095C3.05154 7.81743 3.13239 7.62225 3.2763 7.47834C3.42021 7.33443 3.61539 7.25358 3.81891 7.25358H5.35365L8.03944 3.80042C8.10652 3.67015 8.21797 3.56816 8.35367 3.51288C8.48938 3.45761 8.64037 3.4527 8.77938 3.49903C8.91839 3.54537 9.03624 3.6399 9.11164 3.76554C9.18704 3.89118 9.21501 4.03964 9.1905 4.18411V14.9273C9.21501 15.0717 9.18704 15.2202 9.11164 15.3458C9.03624 15.4715 8.91839 15.566 8.77938 15.6124C8.64037 15.6587 8.48938 15.6538 8.35367 15.5985C8.21797 15.5432 8.10652 15.4412 8.03944 15.311L5.35365 11.8578Z" stroke="#010101" strokeWidth="1.15105" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3350_8">
                        <rect width="18.4169" height="18.4169" fill="white" transform="translate(0.74942 0.347412)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>{audioPlaying?'off':'on'}</span>
              </button>
              <Social />
              <a href='#' target="_blank" className='btn'>Button</a>
              <ReactAudioPlayer ref={audioRef} src={audioFile} controls={audioPlaying} className='d-none' />
              <button className="heading-toggler d-none" onClick={() => setIsMenu(!isMenu)}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
