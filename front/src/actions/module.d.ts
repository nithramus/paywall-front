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
  IsDefault: boolean;
}
type Offres = Array<Offre>;

interface Rule {
  ID: number;
  Name: string;
}
type Rules = Array<Rule>;
