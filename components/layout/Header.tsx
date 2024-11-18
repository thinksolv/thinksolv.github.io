import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png"
              alt="Thinksolv Technologies"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-bold text-xl">Thinksolv Technologies</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
