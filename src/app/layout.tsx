import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import '@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({ subsets: ['latin'] })

// Expanded appearance that covers manage account options
const clerkAppearance = {
  variables: {
    colorPrimary: '#f97316', // orange-500
    colorBackground: '#1f2937', // Dark background for dropdowns/modals
    colorText: 'white',
    colorTextSecondary: '#e5e7eb', // Light gray
    colorTextOnPrimaryBackground: 'white',
    colorInputBackground: '#111827',
    colorInputText: 'white',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorDanger: '#ef4444',
    borderRadius: '0.5rem'
  },
  elements: {
    // User button
    userButtonPopoverCard: "bg-gray-800 border border-gray-700 shadow-xl text-white",
    userButtonPopoverActionButton: "text-white hover:bg-gray-700",
    userButtonPopoverActionButtonText: "text-white",
    userButtonPopoverActionButtonIcon: "text-white",
    userButtonPopoverActionButtonIconBox: "bg-orange-500/20",
    userButtonPopoverFooter: "border-t border-gray-700",
    
    // Account pages
    card: "bg-gray-800 border border-gray-700 shadow-xl",
    navbar: "bg-black text-white",
    navbarButton: "text-white",
    formButtonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
    formButtonReset: "bg-transparent text-gray-400 hover:text-white",
    formFieldLabel: "text-gray-300",
    formFieldInput: "bg-gray-900 border-gray-700 text-white",
    footerActionLink: "text-orange-500 hover:text-orange-600",
    profileSectionTitle: "text-white",
    profileSectionTitleText: "text-white",
    profileSectionContent: "text-gray-300",
    profileSectionPrimaryButton: "text-orange-500",
    
    // Header text
    headerTitle: "text-white",
    headerSubtitle: "text-gray-300",
    
    // Avatar
    avatarBox: "border-orange-500",
    
    // Page link text
    breadcrumbsItem: "text-white hover:text-orange-500",
    breadcrumbsItemDivider: "text-gray-600",
    pageLink: "text-orange-500 hover:text-orange-600"
  }
};

export const metadata: Metadata = {
  title: 'Weather Master\'s',
  description: 'Your real-time weather forecast app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" className="dark">
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" className='w-10 h-10 rounded-full' />
        <body className={`${inter.className} text-white`}>
          <div className="relative w-full flex items-center justify-center ">
            <Navbar />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
