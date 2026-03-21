import SansysImg from '@/assets/SANSYS.png'
import SansysImageOne from '@/assets/SANSYS_1.png'
import SansysImageTwo from '@/assets/SANSYS_2.png'
import SansysImageThree from '@/assets/SANSYS_3.png'
import SansysImageFour from '@/assets/SANSYS_4.png'
import promptGeneratorImg from '@/assets/PROMPT_GENERATOR.png'
import promptGeneratorImgOne from '@/assets/PROMPT_GENERATOR1.png'
import promptGeneratorImgTwo from '@/assets/PROMPT_GENERATOR2.png'
import promptGeneratorImgThree from '@/assets/PROMPT_GENERATOR3.png'
import promptGeneratorImgFour from '@/assets/PROMPT_GENERATOR4.png'
import promptGeneratorImgWhite from '@/assets/PROMPT_GENERATOR_white.png'
import promptGeneratorImgOneWhite from '@/assets/PROMPT_GENERATOR1_white.png'
import promptGeneratorImgTwoWhite from '@/assets/PROMPT_GENERATOR2_white.png'
import promptGeneratorImgThreeWhite from '@/assets/PROMPT_GENERATOR3_white.png'
import promptGeneratorImgFourWhite from '@/assets/PROMPT_GENERATOR4_white.png'
import type { Project } from '@/types/Types'

export const projects: Project[] = [
  {
    active: true,
    opened: false,
    mainImage: promptGeneratorImg,
    company: 'Personal Project',
    companyLink: '',
    title: 'Prompt Generator',
    imagesSectionTitle: 'public_images',
    tags: ['Node', 'Python', 'AI Integration', 'Prompt Enginnering'],
    items: [
      {
        title: 'prompt_generator_description_section',
        sections: ['prompt_generator_description'],
      },
      {
        title: 'prompt_generator_features_section',
        sections: [
          'prompt_generation',
          'ai_agent_definition',
          'prd_and_spring_planner',
          'document_generator',
          'content_enrichment',
          'dual_interface',
        ],
      },
    ],
    images: [
      promptGeneratorImg,
      promptGeneratorImgWhite,
      promptGeneratorImgOne,
      promptGeneratorImgOneWhite,
      promptGeneratorImgTwo,
      promptGeneratorImgTwoWhite,
      promptGeneratorImgThree,
      promptGeneratorImgThreeWhite,
      promptGeneratorImgFour,
      promptGeneratorImgFourWhite,
    ],
  },
  {
    active: true,
    opened: false,
    mainImage: SansysImg,
    company: 'Veolia - JTech',
    companyLink: 'https://www.jtech.com.br/',
    title: 'Sansys Water',
    imagesSectionTitle: 'public_images',
    tags: [
      'Java',
      'PostgreSQL',
      'Spring',
      'Hibernate',
      'JUnit',
      'Mockito',
      'Kafka',
      'VueJS',
      'JSP',
    ],
    items: [
      {
        title: 'sansys_responsibilities_projects_title',
        sections: [
          'sansys_responsibilities_projects_sections_0',
          'sansys_responsibilities_projects_sections_1',
          'sansys_responsibilities_projects_sections_2',
          'sansys_responsibilities_projects_sections_3',
          'sansys_responsibilities_projects_sections_4',
        ],
      },
      {
        title: 'sansys_team_role_title',
        sections: ['sansys_team_role_sections_0'],
      },
      {
        title: 'sansys_main_contributions_title',
        sections: [
          'sansys_main_contributions_sections_0',
          'sansys_main_contributions_sections_1',
          'sansys_main_contributions_sections_2',
        ],
      },
      {
        title: 'sansys_about_veolia_title',
        sections: [
          'sansys_about_veolia_sections_0',
          'sansys_about_veolia_sections_1',
          'sansys_about_veolia_sections_2',
        ],
      },
      {
        title: 'sansys_about_jtech_title',
        sections: [
          'sansys_about_jtech_sections_0',
          'sansys_about_jtech_sections_1',
          'sansys_about_jtech_sections_2',
        ],
      },
      {
        title: 'sansys_about_sansys_title',
        sections: [
          'sansys_about_sansys_sections_0',
          'sansys_about_sansys_sections_1',
          'sansys_about_sansys_sections_2',
        ],
      },
    ],
    images: [SansysImageOne, SansysImageTwo, SansysImageThree, SansysImageFour],
  },
]
