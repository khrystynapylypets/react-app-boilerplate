import { execSync } from 'child_process';

const branchName = execSync('git branch --show-current').toString().trim();
const branchPattern = /^(feature|fix)\/[a-z0-9-]+$/;

if (branchPattern.test(branchName)) {
  process.exit(0);
}

console.error(
  `
    ❌ Invalid branch name: ${branchName}
    
    ✅ Allowed format: 
    - feature/my-feature
    - fix/bug-name
    `
);

process.exit(1);
