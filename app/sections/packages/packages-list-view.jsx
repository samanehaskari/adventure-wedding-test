import Container from "../../components/global/container";
import Typography from "../../components/global/typography";
import PackageCard from "../../components/packages/package-card";
import { packagesData } from "../../libs/package-data";

export default function PackagesListView() {
  return (
    <Container>
      <section className="py-20">
        <div className=" flex flex-col gap-6">
          <div className=" flex flex-col items-center">
            <Typography className=" text-primary-400">PACKAGES</Typography>
            <Typography
              variant="h2"
              as="h2"
              className="font-clash text-zinc-800"
            >
              Explore our most popular Packages
            </Typography>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {packagesData.map((pack, index) => (
              <PackageCard pack={pack} key={pack.title} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
