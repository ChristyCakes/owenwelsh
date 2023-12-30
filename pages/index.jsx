import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import fbLogo from '../public/images/fb.png'
import ytLogo from '../public/images/youtube.png'
import instaLogo from '../public/images/instagram.png'
import liLogo from '../public/images/linkedin.png'
import styles from '../styles/Home1.module.css'
import Link from 'next/link';

const ImageComponent = ({ src, height, width, alt }) => (
    <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
    />
)

const VideoPreview = ({ site, videoId }) => {
    const embedUrl = `https://${site}/${videoId}`;

    return (
        <div>
            <iframe
                width="380"
                height="220"
                src={embedUrl}
                allow='autoplay; fullscreen'
                allowFullScreen
                title="Video Preview"
                frameBorder="0"
            ></iframe>
        </div>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Owen Welsh</title>
                <link rel='icon' href='/favicon.ico' />
                <div className={styles.title}>Owen Welsh</div>
                <div className={styles.links}>
                    <a href='https://www.facebook.com/profile.php?id=100011008247883'><ImageComponent src={fbLogo} width={50} height={50} alt='fb' /></a>
                    <a href='https://www.youtube.com/user/drawnwrite'><ImageComponent src={ytLogo} width={50} height={50} alt='yt' /></a>
                    <a href='https://www.instagram.com/owenwelshgram/'><ImageComponent src={instaLogo} width={50} height={50} alt='ig' /></a>
                    <a href='https://www.linkedin.com/in/owen-welsh-28938b3/'><ImageComponent src={liLogo} width={50} heigh={50} alt='li' /></a>
                </div>
                <div className={styles.nav}>
                    <Link href=''>Reel</Link>
                    <Link href=''>Portfolio</Link>
                    <Link href=''>About</Link>
                    <Link href=''>Contact</Link>
                </div>
            </Head>

            <main>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Art Director Reel &rarr;</h3>
                        <VideoPreview site={'player.vimeo.com/video'} videoId={'385735700'} />
                        <p>art direction &bull; team management &bull; vfx &bull; story boarding &bull; pre-production &bull; compositing</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Animation Reel &rarr;</h3>
                        <VideoPreview site={'www.youtube.com/embed'} videoId={'0oXn7zg0Z10'} />
                        <p>art direction &bull; management &bull; design &bull; rough animation</p>
                    </div>

                    <div className={styles.card}>
                        <h3>3D Modeling Reel &rarr;</h3>
                        <VideoPreview site={'www.youtube.com/embed'} videoId={'0S_9RdObff8'} />
                        <p>
                            art direction &bull; concept &bull; 3D modeling &bull; texturing &bull; rigging &bull; 3D animation &bull; game design &bull; implementation &bull; system design</p>
                    </div>
                </div>
            </main >
        </div>
    )
}
