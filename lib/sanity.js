import sanityClient from '@sanity/client' 

export const client = sanityClient( {
    projectId: 'k3gnbo2h',
    dataset: 'production',
    apiVersion: '2022-02-07',
    token: 'skGLq920e0UmlSlXUjLiGYLjoGEZgzrmya8DbHVm6Hf1gAvyx4qUrw3rFGHJyAYAZKM7sPlFti2TjfXprpueFFb9ugbuTipwJnoP1QhaFZAdiNYsW7QbdEcQJW9AEm1Eh5vvhfhonH7wC1DRCBnW57HP8ph6EVu90kd18UHAMMMGIjTOzq4P',
    useCdn: false,
})