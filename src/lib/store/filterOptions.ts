export const sortOptions = [
    {
        name: 'Recent',
        query: '&sort=date+desc'
    },
    {
        name: 'Relevant',
        query: '&sort=relevant'
    },
    {
        name: 'Higner Salary',
        query: '&sort=compensation+desc'
    },
    {
        name: 'Lower Salary',
        query: '&sort=compensation+asc'
    }
];

export const remoteOptions = [
    {
        name: 'Remote',
        query: '&.REMOTE=yes'
    },
    {
        name: 'Onsite',
        query: '&.REMOTE=no'
    }
];

export const typeOptions = [
    {
        name: 'Full-time',
        query: '&.EMPLOYMENT_TYPE=FULL_TIME'
    },
    {
        name: 'Contract',
        query: '&.EMPLOYMENT_TYPE=CONTRACTOR'
    }
];

export const majorJobOptions = [
   'Software Enginner',
   'Accountant',
   'Construction',
   'Civil Engineer',
   'Data Scientist',
];