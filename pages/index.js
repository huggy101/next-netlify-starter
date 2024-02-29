import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';
import { Redirect } from 'react-router-dom';


export default function Home() {
  return (
 <Redirect to="https://www.google.com/" />;
  )
}
