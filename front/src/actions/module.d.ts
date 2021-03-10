interface Site {
  ID: Number;
  Activated: boolean;
  Name: String;
  Offres: Offres;
  WebsiteUrl: String;
}
type Sites = Array<Site>;

interface Offre {
  ID: String;
  Name: String;
  sites: Site;
}
type Offres = Array<Offre>;
