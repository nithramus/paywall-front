interface Site {
  ID: String;
  Name: String;
  WebsiteUrl: String;
}
type Sites = Array<Site>;

interface Offre {
  ID: String;
  Name: String;
  sites: Site;
}
type Offres = Array<Offre>;
