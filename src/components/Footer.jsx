import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer({ suppressNav = false, supressTopLine = false }) {
  const topClassStr = supressTopLine ? '' : 'border-t border-gray-200'

  return (
    <footer className={topClassStr}>
      <Container>
        {suppressNav ? (
          <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div className="flex items-center text-gray-900">
                <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
                <div className="ml-4">
                  <p className="text-base font-semibold">Foliofficient</p>
                  <p className="mt-1 text-sm">Insights and Alternative Data.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div className="flex items-center text-gray-900">
                <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
                <div className="ml-4">
                  <p className="text-base font-semibold">Foliofficient</p>
                  <p className="mt-1 text-sm">Insights and Alternative Data.</p>
                </div>
              </div>
              <nav className="mt-11 flex gap-8">
                <NavLinks />
              </nav>
            </div>
            <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center"></div>
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-gray-900">
                  <Link href="#">
                    <span className="absolute inset-0 sm:rounded-2xl" />
                    Proudly built in Asheville, NC
                  </Link>
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  51 Shelburne Woods Dr
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Asheville, NC 28806
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto"></form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
