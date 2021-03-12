interface Site {
  ID: number;
  Activated: boolean;
  Name: String;
  Offres: Offres;
  WebsiteUrl: String;
}
type Sites = Array<Site>;

interface Offre {
  ID: number;
  Name: String;
  Sites: sites;
}
type Offres = Array<Offre>;
