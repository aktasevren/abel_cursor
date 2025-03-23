"use client";

import React from "react";
import Image from "next/image";
import { FaHandshake, FaHospital, FaTools, FaClock, FaUserMd, FaCheckCircle, FaCertificate } from 'react-icons/fa';
import styles from './Hakkimizda.module.css';

const Hakkimizda = () => {
  const values = [
    {
      icon: <FaCertificate className={styles.valueIcon} />,
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında hizmet sunuyoruz.'
    },
    {
      icon: <FaHandshake className={styles.valueIcon} />,
      title: 'Güven',
      description: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.'
    },
    {
      icon: <FaClock className={styles.valueIcon} />,
      title: 'Hız',
      description: 'Hızlı ve etkili çözümlerle yanınızdayız.'
    }
  ];

  const services = [
    {
      icon: <FaHospital className={styles.serviceIcon} />,
      title: 'Tıbbi Cihaz Satışı',
      description: 'En son teknoloji tıbbi cihazların satışı ve kurulumu.'
    },
    {
      icon: <FaTools className={styles.serviceIcon} />,
      title: 'Teknik Servis',
      description: 'Profesyonel bakım ve onarım hizmetleri.'
    },
    {
      icon: <FaUserMd className={styles.serviceIcon} />,
      title: 'Eğitim',
      description: 'Cihaz kullanımı ve bakımı konusunda eğitimler.'
    }
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Biyomedikal Teknolojilerinde Güvenilir Çözüm Ortağınız</h1>
        </div>
      </section>



      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Hakkımızda</h2>
              <p className={styles.aboutText}>
                2008 yılından bu yana, biyomedikal sektöründe faaliyet gösteren firmamız, 
                sağlık kuruluşlarına en kaliteli tıbbi cihaz ve teknik servis hizmetlerini sunmaktadır. 
                Deneyimli ekibimiz ve modern altyapımızla, müşterilerimizin ihtiyaçlarına en hızlı ve 
                etkili şekilde çözüm üretiyoruz.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>ISO 13485:2016 Sertifikalı</span>
                </div>
                <div className={styles.feature}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>CE Sertifikalı Ürünler</span>
                </div>
                <div className={styles.feature}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>7/24 Teknik Destek</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/media/about-image.jpg"
                alt="Biyomedikal Teknik Servis"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Hizmetlerimiz</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda; 