import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-xl mb-8">Could not find requested resource</p>
        <Link 
          href="/" 
          className="bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}