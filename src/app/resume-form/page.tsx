import React from 'react'
import Index from './components/Index'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Resume Form | My Resume App",
  description: "Fill in your resume details here",
};
export default function Page() {
  return (
    <Index />
  )
}
