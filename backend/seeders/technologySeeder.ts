import { Technology } from "../models";

async function technologySeeder() {
    await Technology.insertMany([
        { name: 'React.js' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'TypeScript' },
        { name: 'Redux' },
        { name: 'Webpack' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'REST API' },
        { name: 'GraphQL' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Python' },
        { name: 'Machine Learning' },
        { name: 'PyTorch' },
        { name: 'Data Visualization' },
        { name: 'Adobe XD' },
        { name: 'Sketch' },
        { name: 'Figma' },
        { name: 'Zeplin' },
        { name: 'InVision' },
        { name: 'Illustrator' },
        { name: 'Agile' },
        { name: 'Scrum' },
        { name: 'Jira' },
        { name: 'MS Project' },
        { name: 'Jenkins' },
        { name: 'AWS' },
        { name: 'Terraform' },
        { name: 'Ansible' },
        { name: 'CI/CD' },
        { name: 'After Effects' },
        { name: 'Usability Testing' },
        { name: 'SQL' },
        { name: 'Pandas' },
        { name: 'Power BI' },
        { name: 'Tableau' },
        { name: 'R' },
        { name: 'Swift' },
        { name: 'Kotlin' },
        { name: 'React Native' },
        { name: 'Flutter' },
        { name: 'RxSwift' },
        { name: 'Jetpack Compose' },
        { name: 'NativeScript' },
        { name: 'Windows Server' },
        { name: 'Active Directory' },
        { name: 'Office 365' },
        { name: 'Linux' },
        { name: 'Network Security' },
        { name: 'ITIL' },
        { name: 'SEO' },
        { name: 'Google Analytics' },
        { name: 'Email Marketing' },
        { name: 'PPC Advertising' },
        { name: 'Social Media Marketing' },
        { name: 'Marketing Automation' },
        { name: 'Prometheus' },
        { name: 'HR Software' },
        { name: 'Performance Management' },
        { name: 'HR Analytics' },
        { name: 'Firewall' },
        { name: 'VPN' },
        { name: 'Network Monitoring' },
        { name: 'SIEM Solutions' },
        { name: 'Penetration Testing' },
        { name: 'Cryptography' },
        { name: 'User-Centered Design' },
        { name: 'Prototyping Tools' },
        { name: 'Statistical Analysis' },
        { name: 'Big Data Technologies' },
        { name: 'Xamarin' },
        { name: 'Firebase' },
        { name: 'Ethical Hacking' },
        { name: 'Incident Response' },
        { name: 'Selenium' },
        { name: 'TestRail' },
        { name: 'API Testing' },
        { name: 'Swagger' },
        { name: 'Apollo Server' },
        { name: 'Apollo Client' },
        { name: 'Cypress' },
        { name: 'Jest' },
        { name: 'Performance Testing' },
        { name: 'Load Testing' },
        { name: 'Java' },
        { name: 'C++' },
        { name: 'C#' },
        { name: '.NET' },
        { name: 'ASP.NET' },
        { name: 'Spring Boot' },
        { name: 'Hibernate' },
        { name: 'Kafka' },
        { name: 'RabbitMQ' },
        { name: 'Microservices' },
        { name: 'MySQL' },
        { name: 'Angular' },
        { name: 'Product Roadmap' },
        { name: 'Market Research' },
        { name: 'User Testing' },
        { name: 'Webflow' },
        { name: 'Cisco' },
        { name: 'LAN/WAN' },
        { name: 'Juniper' },
        { name: 'VoIP' },
        { name: 'Wireless Networking' },
        { name: 'HRIS' },
        { name: 'RWD' },
        { name: 'Digital Marketing' },
        { name: 'Content Marketing' },
        { name: 'SEM' },
        { name: 'Realm' },
        { name: 'Electron.js' },
        { name: 'IT Security' },
        { name: 'VMware' },
        { name: 'Bash' },
        { name: 'Powershell' },
        { name: 'Adobe CC' },
        { name: 'Photoshop' },
        { name: 'InDesign' },
        { name: 'UI Design' },
        { name: 'UX Design' },
        { name: 'Video Scripting' },
        { name: 'WordPress' },
        { name: 'NoSQL' },
        { name: 'SQL Server' },
        { name: 'Google Cloud' },
        { name: 'Azure' },
        { name: 'E-commerce' }
    ]);
}

export default technologySeeder;