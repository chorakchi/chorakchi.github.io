import React from 'react';
import { LogoProps } from './Logo.interface';
import { ContainerStyled } from './styled';

export const Logo: React.FC<LogoProps> = ({
    ...props }) => {
    return (<svg width="102" height="83" viewBox="0 0 102 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M79.963 31.948L100.993 32.131L101.026 28.158L79.998 27.974L79.963 31.948ZM92.945 51.575L100.823 51.643L100.863 46.982L92.981 46.913L92.945 51.575ZM95.823 82.062L100.195 82.1L100.229 78.125L95.857 78.087L95.823 82.062ZM0.707001 0L31.456 0.448999L50.846 18.577L70.915 0.431999L93.315 0.591999L93.281 4.927L101.627 5L101.579 10.6L92.579 10.521L92.546 14.28L76.794 14.141L76.756 18.477L101.507 18.694L101.466 23.282L54.675 22.874L54.691 25.115L54.634 27.541L73.929 27.704L73.895 31.604L65.151 31.528L65.003 36.189L101.352 36.506L101.318 40.406L94.706 40.347L94.671 44.431L83.36 44.331L83.32 48.992L87.439 49.028L87.401 53.291L75.767 53.191L75.726 57.852L101.164 58.074L101.126 62.302L95.2 62.25L95.173 65.32L92.03 65.293L91.99 69.954L101.059 70.034L101.031 73.25L74.546 73.023L74.505 77.684L90.945 77.827L90.912 81.621L70.207 81.441L69.931 42.81L50.481 60.347L31.091 42.182L30.749 81.349L0 81.082L0.707001 0ZM87.546 65.692L87.505 70.354L83.747 70.321L83.788 65.66L87.546 65.692ZM82.761 9.352L86.447 9.384L86.488 4.723L82.802 4.691L82.761 9.352ZM11.488 11.041L18.932 11.106L18.946 9.552L11.502 9.487L11.488 11.041ZM16.505 7.579L20.697 7.617L20.711 6.063L16.519 6.027L16.505 7.579ZM14.891 14.503L17.529 14.526L17.543 12.936L14.905 12.913L14.891 14.503ZM5.714 14.279L14.024 14.351L14.038 12.797L7.281 12.741L7.327 7.502L15.745 7.576L15.759 6.022L5.787 5.935V6.26L5.731 12.728L5.724 13.558L5.714 14.279ZM5.396 17.564L12.262 17.624L12.276 16.07L5.41 16.01L5.396 17.564Z" fill="black" />
    </svg>

    );
};