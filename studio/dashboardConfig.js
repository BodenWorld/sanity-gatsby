export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d66396c89d7db8e6c36fb2a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-khd418d4',
                  apiId: 'adac5ca9-3f72-4fac-bef9-3855e107e07b'
                },
                {
                  buildHookId: '5d66396c3834d46255d540dd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-d1f2gvm1',
                  apiId: 'b7ac884b-f408-4696-9604-278154217e42'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BodenWorld/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-d1f2gvm1.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
