'use client';
import React from "react";
import Header from '../../../../component/header/Header'
import Footer from '../../../../component/footer/Footer'
import './ourTeam.css'
import Pkit from '../../../../public/Pkit.png'
import Pterk from '../../../../public/Pterk.png'
import allTeam from '../../../../public/allTeam.png'
import Image from 'next/image'
import { SiMinetest } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n'

const OurTeam = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className='ourTeam-bg'>
                <div className="ourTeam-text">
                    <h1 className="ourTeam-title">{t('MEET THE TEAM')}</h1>
                </div>
            </div>
            <p className="ourTeam-subtitle-desc">{t('Overview of us')}</p>
            <div className="horizontal-line-ourTeam"></div>
            <p className="ourTeam-desc">{t('FullStart is a company formed from a group of experts in Information Teachnology, Computer Network,')}
                {t('Computer Software & Hardware, Internet of Thing (IoT) who are confident in being able to help solve problems. and take care of various systems .')}</p>

            <div className='peeKit'>
                <Image src={Pkit} alt='' className='peeKit-img' />
                <div className="peeKit-text">
                    <p className="peeKit-title">{t('Mr.Kitti Washirasuttanan (Kit)')}</p>
                    <p className="peeKit-subTitle">{t('Founder / CEO')}</p>
                    <p className="peeKit-desc">
                        {t('The CEO, or Chief Executive Officer, is the highest-ranking executive in an organization. The CEO is responsible for making important decisions and setting the overall direction and strategy of the organization.')}
                    </p>
                    <div className="horizontal-line-peeKit"></div>
                </div>
            </div>

            <div className='peeTerk'>
                <Image src={Pterk} alt='' className='peeTerk-img' />
                <div className="peeTerk-text">
                    <p className="peeTerk-title">{t('Mr.Chatawat Lekkla (Terk)')}</p>
                    <p className="peeTerk-subTitle">{t('Head of Software Deverlopment')}</p>
                    <p className="peeTerk-desc">
                    {t('A specialist in design and development planning, with a focus on programming using a specific programming language, as well as project management and feature design for the company.')}
                    </p>
                </div>
            </div>

            <div className='allTeam'>
                <p className="allTeam-title">{t('Meet Our Team')}</p>
                <div className="image-container">
                    <Image src={allTeam} alt='' className='allTeam-img' />
                </div>
            </div>

            <div className="allTeam-container">
                <div className="allTeam-text">

                    <div className="title-container">
                        <SiMinetest className="icon-tester" />
                        <h2 className="tester-title">{t('Software Testing')}</h2>
                    </div>
                    <p className="tester-desc">
                        {t('Software Testing is responsible for testing computer management systems, systems that use computers to control internal or online systems.')}
                    </p>

                    <div className="title-container">
                        <GrPersonalComputer className="icon-programmer" />
                        <h2 className="programmer-title">{t('Programmer')}</h2>
                    </div>
                    <p className="programmer-desc">
                        {t('Programmers will be responsible for bringing design information and details of computer system structure.')}
                        {t('From a work system analyst Let us write various programs, which will have different programming languages.')}
                    </p>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default OurTeam;