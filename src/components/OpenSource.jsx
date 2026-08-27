import React from "react";
import { GitPullRequest, ExternalLink } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";

const contributions = [
  {
    repo: "dragonflydb/dragonfly",
    repoUrl: "https://github.com/dragonflydb/dragonfly",
    prs: [
      {
        number: 8174,
        url: "https://github.com/dragonflydb/dragonfly/pull/8174",
        title:
          "fix(tests): wait for loading to finish before first write in test_shutdown_snapshot_contains_acknowledged_writes",
        note: "DflyInstance.start() only waits for the process to open its port, not for the server to leave LOADING state, so the test's first write could race a BusyLoadingError — added the same readiness wait already used after the second startup.",
        merged: "Aug 27, 2026",
      },
      {
        number: 8135,
        url: "https://github.com/dragonflydb/dragonfly/pull/8135",
        title: "fix(tests): use FLUSHALL SYNC in test_rss_oom_ratio",
        note: "A flaky RSS-drop test raced an async flush against the memory decommit it was asserting on — switched to a synchronous flush so the assertion runs after memory is actually freed.",
        merged: "Aug 21, 2026",
      },
      {
        number: 8091,
        url: "https://github.com/dragonflydb/dragonfly/pull/8091",
        title: "fix(zset): honor GT/LT flags for skiplist-encoded sorted sets",
        note: "ZADD's GT/LT conditional flags were silently ignored on skiplist-encoded sorted sets, so scores got overwritten unconditionally instead of no-op'ing when the condition failed.",
        merged: "Aug 16, 2026",
      },
      {
        number: 8054,
        url: "https://github.com/dragonflydb/dragonfly/pull/8054",
        title: "fix(search): reject FT.CREATE missing the SCHEMA keyword",
        note: "FT.CREATE without a SCHEMA clause was accepted and produced a zero-field index — visible in FT._LIST but unusable for queries, and a source of FT.INFO / replica divergence.",
        merged: "Aug 13, 2026",
      },
      {
        number: 8030,
        url: "https://github.com/dragonflydb/dragonfly/pull/8030",
        title:
          "fix(geo): avoid replica crash on cross-shard GEORADIUS/GEORADIUSBYMEMBER STORE",
        note: "Auto-journaling only captured shard-local arguments for multi-shard transactions, so replicas crashed replaying cross-shard GEORADIUS ... STORE operations.",
        merged: "Aug 10, 2026",
      },
      {
        number: 7974,
        url: "https://github.com/dragonflydb/dragonfly/pull/7974",
        title:
          "fix(scripting): avoid std::regex recursion SIGABRT in DetectPossibleAsyncCalls",
        note: "std::regex with nested quantifiers recursed on long non-whitespace runs in Lua scripts, exhausting the fiber's stack and aborting the server — replaced with an iterative scanner.",
        merged: "Aug 7, 2026",
      },
    ],
  },
  {
    repo: "BetterDB-inc/monitor",
    repoUrl: "https://github.com/BetterDB-inc/monitor",
    prs: [
      {
        number: 402,
        url: "https://github.com/BetterDB-inc/monitor/pull/402",
        title:
          "fix(connect-defaults): keep host.docker.internal on DNS probe timeout",
        note: "A timed-out DNS lookup was treated the same as a definitive NXDOMAIN, so the default host silently fell back to the Docker bridge IP — introduced a tri-state result so only a confirmed 'not found' triggers the fallback.",
        merged: "Aug 19, 2026",
      },
    ],
  },
];

const totalPRs = contributions.reduce((sum, group) => sum + group.prs.length, 0);

export const OpenSource = () => (
  <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        file="open_source.log"
        title="Upstream Contributions"
        subtitle={`SELECT * FROM pull_requests WHERE author = 'Shikha-code36' AND state = 'merged'; -- ${totalPRs} rows across ${contributions.length} repos`}
      />

      <div className="space-y-8">
        {contributions.map((group) => (
          <div key={group.repo}>
            <a
              href={group.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-schema-heading text-sm font-medium mb-3 hover:text-schema-accent transition-colors duration-200"
            >
              {group.repo}
              <ExternalLink size={13} />
            </a>
            <div className="border border-schema-border rounded-lg overflow-hidden">
              {group.prs.map((pr, i) => (
                <div
                  key={pr.number}
                  className={`grid grid-cols-1 md:grid-cols-[100px_1fr_110px] bg-schema-raised ${
                    i !== group.prs.length - 1
                      ? "border-b border-schema-soft"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4 md:border-r border-schema-soft flex items-center gap-2 text-schema-accent text-sm">
                    <GitPullRequest size={14} className="flex-shrink-0" />
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      #{pr.number}
                    </a>
                  </div>
                  <div className="px-5 py-4 md:border-r border-schema-soft min-w-0">
                    <div className="text-schema-heading text-sm mb-1.5 break-words">
                      {pr.title}
                    </div>
                    <p className="text-schema-dim text-xs leading-relaxed">
                      {pr.note}
                    </p>
                  </div>
                  <div className="px-5 py-4 text-schema-faint text-xs whitespace-nowrap">
                    {pr.merged}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
