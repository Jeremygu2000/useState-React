import React, { useState, useEffect } from 'react';
import './Clock.css'; // Assurez-vous d'avoir un fichier de style pour le rendu de l'horloge

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(intervalID);
  }, []); // Le tableau vide [] signifie que cet effet n'a lieu qu'une seule fois après le montage initial

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Calcul des angles pour les aiguilles
  const secondsAngle = seconds * 6; // Chaque seconde correspond à un mouvement de 6 degrés (360 degrés / 60 secondes)
  const minutesAngle = (minutes * 6) + (seconds * 0.1); // Chaque minute correspond à un mouvement de 6 degrés, et chaque seconde à un mouvement de 0.1 degré
  const hoursAngle = (hours * 30) + (minutes * 0.5); // Chaque heure correspond à un mouvement de 30 degrés, et chaque minute à un mouvement de 0.5 degré

  return (
    <div className="clock-container">
      <div className="clock-face">
        <div className="hour-hand" style={{ transform: `rotate(${hoursAngle}deg)`, transformOrigin: 'center bottom' }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minutesAngle}deg)`, transformOrigin: 'center bottom' }}></div>
        <div className="second-hand" style={{ transform: `rotate(${secondsAngle}deg)`, transformOrigin: 'center bottom' }}></div>
      </div>
    </div>
  );
}

export default Clock;
