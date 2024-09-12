const { ObjectWritableMock } = require('stream-mock');

const st = new ObjectWritableMock();

(async () => {
    const semanticRelease = await import('semantic-release');
    const result = await semanticRelease.default({
        branches: ['master', 'origin/master'],
        plugins: [
            '@semantic-release/commit-analyzer'
        ],
        dryRun: true,
        tagFormat: '${version}'
    }, { stdout: st });

    if (result) {
        console.log(result.nextRelease.version);
    } else {
        console.log('No changes since the last release');
    }
})();
