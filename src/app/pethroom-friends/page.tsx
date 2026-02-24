import SubHero from "@/components/SubHero/SubHero"
import PageNavigation from "@/components/PageNavigation/PageNavigation"

export const metadata = {
  title: "BMSmile | Pethroom Friends",
  description: "BMSmile Pethroom Friends 페이지",
}

export default function PethroomFriendsPage() {
  return (
    <>
      <SubHero
        type="image"
        imageSrc="/images/pethroom/img_pethroom_hero.png"
        tone="dark"
        title={`NO.1\nPlatform`}
        subtext="페스룸 프렌즈"
      />
      <PageNavigation
        prev={{ label: "< Prev", href: "/pethroom", chipLabel: "No.1 Pet IP", chipHref: "/pethroom" }}
        next={{ label: "Next >", href: "/people", chipLabel: "No.1 People", chipHref: "/people" }}
      />
    </>
  )
}
