import { TypographyH2, TypographyP } from '@/components/Typography/typography'
import { Cursive, Tag } from '@/components/Typography/utils'
import { Highlighter } from '@/components/ui/highlighter'
import BentoSection from './bento-section'

export default function Agency() {
    return (
        <div
            className="w-full flex flex-col justify-start items-center gap-16"
            id="faq"
        >
            {/* ── Header ── */}
            <div className="flex flex-col justify-center items-center text-center mt-16">
                <Tag>We Build It For You</Tag>
                <TypographyH2 className="font-medium my-2">
                    Your <Highlighter color='#FF9800' classname='text-black'>vision</Highlighter>. Our{" "}<Cursive classname="inline-block">execution.</Cursive>
                </TypographyH2>
                <TypographyP className="pt-1 text-center px-2 md:px-8 lg:px-8 text-muted-foreground leading-relaxed max-w-3xl">
                    Whether you need a landing page, a full SaaS product, or a custom solution — we've got the team and the stack to build it right.
                </TypographyP>
            </div>

            {/* ── Accordion ── */}
            <div className="w-full border-t-2 border-dashed ">
               <BentoSection/>
            </div>
        </div>
    )
}

