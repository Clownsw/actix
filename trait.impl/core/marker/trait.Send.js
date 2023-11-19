(function() {var implementors = {
"actix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/prelude/enum.ActorState.html\" title=\"enum actix::prelude::ActorState\">ActorState</a>",1,["actix::actor::ActorState"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/prelude/enum.Running.html\" title=\"enum actix::prelude::Running\">Running</a>",1,["actix::actor::Running"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.SpawnHandle.html\" title=\"struct actix::prelude::SpawnHandle\">SpawnHandle</a>",1,["actix::actor::SpawnHandle"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Context.html\" title=\"struct actix::prelude::Context\">Context</a>&lt;A&gt;",1,["actix::context::Context"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextParts.html\" title=\"struct actix::dev::ContextParts\">ContextParts</a>&lt;A&gt;",1,["actix::contextimpl::ContextParts"]],["impl&lt;A, C&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextFut.html\" title=\"struct actix::dev::ContextFut\">ContextFut</a>&lt;A, C&gt;",1,["actix::contextimpl::ContextFut"]],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.MessageResult.html\" title=\"struct actix::prelude::MessageResult\">MessageResult</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    &lt;M as <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a>&gt;::<a class=\"associatedtype\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::handler::MessageResult"]],["impl&lt;A, T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.AtomicResponse.html\" title=\"struct actix::prelude::AtomicResponse\">AtomicResponse</a>&lt;A, T&gt;",1,["actix::handler::AtomicResponse"]],["impl&lt;I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Response.html\" title=\"struct actix::prelude::Response\">Response</a>&lt;I&gt;",1,["actix::handler::Response"]],["impl&lt;A, I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.ActorResponse.html\" title=\"struct actix::prelude::ActorResponse\">ActorResponse</a>&lt;A, I&gt;",1,["actix::handler::ActorResponse"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Supervisor.html\" title=\"struct actix::prelude::Supervisor\">Supervisor</a>&lt;A&gt;",1,["actix::supervisor::Supervisor"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressSender.html\" title=\"struct actix::dev::channel::AddressSender\">AddressSender</a>&lt;A&gt;",1,["actix::address::channel::AddressSender"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressReceiver.html\" title=\"struct actix::dev::channel::AddressReceiver\">AddressReceiver</a>&lt;A&gt;",1,["actix::address::channel::AddressReceiver"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.Envelope.html\" title=\"struct actix::dev::Envelope\">Envelope</a>&lt;A&gt;",1,["actix::address::envelope::Envelope"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/prelude/enum.SendError.html\" title=\"enum actix::prelude::SendError\">SendError</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::address::SendError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/prelude/enum.MailboxError.html\" title=\"enum actix::prelude::MailboxError\">MailboxError</a>",1,["actix::address::MailboxError"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Addr.html\" title=\"struct actix::prelude::Addr\">Addr</a>&lt;A&gt;",1,["actix::address::Addr"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.WeakAddr.html\" title=\"struct actix::WeakAddr\">WeakAddr</a>&lt;A&gt;",1,["actix::address::WeakAddr"]],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Recipient.html\" title=\"struct actix::prelude::Recipient\">Recipient</a>&lt;M&gt;",1,["actix::address::Recipient"]],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.WeakRecipient.html\" title=\"struct actix::WeakRecipient\">WeakRecipient</a>&lt;M&gt;",1,["actix::address::WeakRecipient"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.Mailbox.html\" title=\"struct actix::dev::Mailbox\">Mailbox</a>&lt;A&gt;",1,["actix::mailbox::Mailbox"]],["impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/mocker/struct.Mocker.html\" title=\"struct actix::actors::mocker::Mocker\">Mocker</a>&lt;T&gt;",1,["actix::actors::mocker::Mocker"]],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/future/enum.Map.html\" title=\"enum actix::fut::future::Map\">Map</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::future::map::Map"]],["impl&lt;A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/future/enum.Then.html\" title=\"enum actix::fut::future::Then\">Then</a>&lt;A, B, F&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::future::then::Then"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/future/struct.Timeout.html\" title=\"struct actix::fut::future::Timeout\">Timeout</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::future::timeout::Timeout"]],["impl&lt;F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/future/struct.FutureWrap.html\" title=\"struct actix::fut::future::FutureWrap\">FutureWrap</a>&lt;F, A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::future::FutureWrap"]],["impl&lt;S, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Collect.html\" title=\"struct actix::fut::stream::Collect\">Collect</a>&lt;S, C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::collect::Collect"]],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Finish.html\" title=\"struct actix::fut::stream::Finish\">Finish</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::finish::Finish"]],["impl&lt;S, F, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Fold.html\" title=\"struct actix::fut::stream::Fold\">Fold</a>&lt;S, F, Fut, T&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::fold::Fold"]],["impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Map.html\" title=\"struct actix::fut::stream::Map\">Map</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::map::Map"]],["impl&lt;S, I, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.SkipWhile.html\" title=\"struct actix::fut::stream::SkipWhile\">SkipWhile</a>&lt;S, I, F, Fut&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::skip_while::SkipWhile"]],["impl&lt;S, I, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.TakeWhile.html\" title=\"struct actix::fut::stream::TakeWhile\">TakeWhile</a>&lt;S, I, F, Fut&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::take_while::TakeWhile"]],["impl&lt;S, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Then.html\" title=\"struct actix::fut::stream::Then\">Then</a>&lt;S, F, Fut&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::then::Then"]],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Timeout.html\" title=\"struct actix::fut::stream::Timeout\">Timeout</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::timeout::Timeout"]],["impl&lt;S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.StreamWrap.html\" title=\"struct actix::fut::stream::StreamWrap\">StreamWrap</a>&lt;S, A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::stream::StreamWrap"]],["impl&lt;A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.AndThen.html\" title=\"enum actix::fut::try_future::AndThen\">AndThen</a>&lt;A, B, F&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::try_future::and_then::AndThen"]],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.MapErr.html\" title=\"enum actix::fut::try_future::MapErr\">MapErr</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::try_future::map_err::MapErr"]],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.MapOk.html\" title=\"enum actix::fut::try_future::MapOk\">MapOk</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::fut::try_future::map_ok::MapOk"]],["impl&lt;T, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/io/struct.Writer.html\" title=\"struct actix::io::Writer\">Writer</a>&lt;T, E&gt;",1,["actix::io::Writer"]],["impl&lt;I, T, U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/io/struct.FramedWrite.html\" title=\"struct actix::io::FramedWrite\">FramedWrite</a>&lt;I, T, U&gt;",1,["actix::io::FramedWrite"]],["impl&lt;I, S&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/io/struct.SinkWrite.html\" title=\"struct actix::io::SinkWrite\">SinkWrite</a>&lt;I, S&gt;",1,["actix::io::SinkWrite"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/registry/struct.Registry.html\" title=\"struct actix::registry::Registry\">Registry</a>",1,["actix::registry::Registry"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/registry/struct.SystemRegistry.html\" title=\"struct actix::registry::SystemRegistry\">SystemRegistry</a>",1,["actix::registry::SystemRegistry"]],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncArbiter.html\" title=\"struct actix::sync::SyncArbiter\">SyncArbiter</a>&lt;A&gt;",1,["actix::sync::SyncArbiter"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncContext.html\" title=\"struct actix::sync::SyncContext\">SyncContext</a>&lt;A&gt;",1,["actix::sync::SyncContext"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/utils/struct.Condition.html\" title=\"struct actix::utils::Condition\">Condition</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["actix::utils::Condition"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/utils/struct.TimerFunc.html\" title=\"struct actix::utils::TimerFunc\">TimerFunc</a>&lt;A&gt;",1,["actix::utils::TimerFunc"]],["impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/utils/struct.IntervalFunc.html\" title=\"struct actix::utils::IntervalFunc\">IntervalFunc</a>&lt;A&gt;",1,["actix::utils::IntervalFunc"]]],
"actix_broker":[["impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_broker/struct.Broker.html\" title=\"struct actix_broker::Broker\">Broker</a>&lt;T&gt;",1,["actix_broker::broker::Broker"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_broker/struct.SystemBroker.html\" title=\"struct actix_broker::SystemBroker\">SystemBroker</a>",1,["actix_broker::broker::SystemBroker"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_broker/struct.ArbiterBroker.html\" title=\"struct actix_broker::ArbiterBroker\">ArbiterBroker</a>",1,["actix_broker::broker::ArbiterBroker"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()