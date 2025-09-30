import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Car, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-foreground">
                  Elbilhallen
                </span>
                <p className="text-sm text-muted-foreground">
                  Din spesialist på elbil
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Med Norges mest allsidige kompetanse innen dette segmentet tilbyr vi
              skreddersydde løsninger for alle dine elbilbehov.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hurtiglenker</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/biler" className="text-muted-foreground hover:text-primary transition-colors">
                  Se alle biler
                </Link>
              </li>
              <li>
                <Link href="/tjenester" className="text-muted-foreground hover:text-primary transition-colors">
                  Våre tjenester
                </Link>
              </li>
              <li>
                <Link href="/finansiering" className="text-muted-foreground hover:text-primary transition-colors">
                  Finansiering
                </Link>
              </li>
              <li>
                <Link href="/innbytte" className="text-muted-foreground hover:text-primary transition-colors">
                  Innbytte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Luramyrveien 21<br />
                  4313 Sandnes
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <Link
                  href="tel:+4791732999"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +47 917 32 999
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <Link
                  href="mailto:post@elbilhallen.no"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  post@elbilhallen.no
                </Link>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Man-Fre: 10:00 – 17:00</div>
                  <div>Lørdag: 10:00 – 14:00</div>
                  <div>Søndag: Stengt</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Elbilhallen. Alle rettigheter forbeholdt.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/personvern"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
